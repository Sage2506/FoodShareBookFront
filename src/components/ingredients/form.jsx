import React from 'react';
import { Form, Button, Col, Tabs, Tab } from "react-bootstrap";

export const IngredientForm = props => {
  let {
    name,
    description,
    measures,
    measuresCatalog,
    measureGroups,
    validated,
    handleInputChange,
    handleInputSubmit,
    goBack,
    groupDisabled,
    activeTab,
    tabChange
  } = props
  return (
    <Form noValidate validated={validated} onSubmit={handleInputSubmit}>
      <Form.Group as={Col} xl={8} xs={12} controlId="name" >
        <Form.Label>Ingredient name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          placeholder="Describe an ingredient name"
          onChange={handleInputChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please write a dish name.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Set a fancy name
        </Form.Text>
      </Form.Group>
      <Form.Group as={Col} xl={8} xs={12} controlId="description" >
        <Form.Label>description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          placeholder="write a Ingredient description"
          onChange={handleInputChange}
          required />
        <Form.Control.Feedback type="invalid">
          Please write a recipe.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} controlId="formBasicCheckbox">
        <Form.Label>Measures</Form.Label>
        <Tabs activeKey={activeTab} id="uncontrolled-tab-example" className="mb-3" onSelect={(tab) => tabChange(tab)}>
          {measureGroups.map(group =>
            <Tab key={`tab_${group.key}`} eventKey={group.key} title={group.label} disabled={groupDisabled(group.key)} >
              {measuresCatalog.filter(measure => measure.group === group.key).map(measure =>
                <Form.Check
                  key={'measure_id_' + measure.id}
                  type="checkbox"
                  value={measure.id}
                  label={measure.name}
                  onChange={handleInputChange}
                  checked={measures.includes(measure.id)}
                />
              )}
            </Tab>
          )}
        </Tabs>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="danger" title="cancelar" onClick={goBack} >Cancel</Button>
    </Form>
  );
}

export default IngredientForm;
