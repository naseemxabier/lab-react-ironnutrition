import { Card, Col, Button } from 'antd';

function FoodBox(props, deleteHandler) {
    let { name, calories, image, servings } = props
    let totalCalories = calories * servings;




    return (
        <div>
            <Col>
                <Card
                    title={name}
                    style={{ width: 430, height: 500, margin: 10 }}
                >
                    <img src={image} height={60} alt="food" />
                    <p>Calories: {calories}</p>
                    <p>Servings: {servings}</p>
                    <p>
                        <b>Total Calories: {totalCalories} </b> kcal
                    </p>
                    <Button type="primary" onClick={deleteHandler}> Delete </Button>
                </Card>
            </Col>

        </div>
    )
}
export default FoodBox;