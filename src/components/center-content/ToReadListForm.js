import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ToReadListForm = () => {

    const handleFormSubmit = (b) => {
        b.preventDefault(); //do not refresh page when submitting
        console.log(b);
    }

  return (
    <Row className="justify-content-center" style={{backgroundColor: 'blue'}}>
        <Col lg="8">
            <h4 className="formTitle my-4">Add a book to your to-read list</h4>
            <Form className="bookAddForm"
                    onSubmit={handleFormSubmit}
                >
                <Row>
                    <Col>
                        <Form.Label htmlFor="bookName" className="label" visuallyHidden>Book Name</Form.Label>
                        <Form.Control 
                            type="text"
                            id="bookName"
                            className="input"
                            //value={bookAdded}
                            //onInput={(b) => setBook(b.target.value)}
                            required
                            autoFocus
                            placeholder="Enter book name" 
                        />
                    </Col>

                    <Col xs="auto">
                        <Button variant="primary" aria-label="Add Book" type="submit">
                        Add
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
  )
}

export default ToReadListForm