import Table from 'react-bootstrap/Table';
import { PropTypes } from 'prop-types';

function TableMarca({ netIncome }) {

    const total = netIncome.reduce((total, i) => {
       return total + i.income; //return para que devuleba el valor acumulado en cada iteracion
    }, 0 ) //0 es el valor inicial
    const promedio = total / netIncome.length;

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso neto</th>
                </tr>
            </thead>

            <tbody>
                {netIncome.map((item, i) => (
                    <tr key={i}>
                        <td>{item.brand}</td>
                        <td>{item.income}</td>
                    </tr>
                ))}

                <tr>
                    <td colSpan={2}>Promedio: {promedio} </td>
                </tr>
            </tbody>
        </Table>
    );
}

Table.propTypes = {
    netIncome: PropTypes.func,
};

export default TableMarca;