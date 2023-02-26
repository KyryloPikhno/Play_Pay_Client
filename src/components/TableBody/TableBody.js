import {Button} from "shards-react";
import React from "react";
import moment from "moment";

const TableBody = ({row, statusChanger,deleter}) => {

  const {
    _id,
    companyName,
    gameName,
    totalPrice,
    currency,
    createdAt,
    updatedAt
  } = row


  return (
    <tr>
      <td>{_id.slice(-4)}</td>
      <td>{companyName}</td>
      <td>{gameName}</td>
      <td>{totalPrice}</td>
      <td>{currency}</td>
      <td>{createdAt && moment(createdAt).format( "dd/mm/yy HH:mm:ss")}</td>
      {
        row.status ?
          <td>
            <div>{updatedAt && moment(updatedAt).format( "dd/mm/yy HH:mm:ss")}</div>
            <Button theme="warning"
                    onClick={() => deleter(_id)}>Close</Button></td>
          :
          <td>
            <Button theme="success"
                    onClick={() => statusChanger(_id)}>Pay</Button>
          </td>
      }
    </tr>
  );
};

export {TableBody};
