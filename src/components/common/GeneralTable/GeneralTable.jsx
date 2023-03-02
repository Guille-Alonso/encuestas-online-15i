import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './GeneralTable.css'

const GeneralTable = ({headings, items, setSelected, selected}) => {


  return ( 
    <Table striped bordered hover>
    <thead>
      <tr>
        { 
        headings.map((heading)=><th key={nanoid()}>{heading}</th>)
        }        
      </tr>
    </thead>
    <tbody>
      {
        
        items.length!==0 && items.map((item)=>
        
        <tr key={nanoid()} onClick={()=>setSelected(item._id)} className={selected===item._id? 'row-selected' : ''}>
          {
          
          Object.values(item).map((value)=>{
            if (!Array.isArray(value)) {
              return  <td key={nanoid()}>{value?.name ?? value }</td>
            }
         
          
        })

          }
        </tr>
          )
      }
      
    </tbody>
  </Table>
   );
}
 
export default GeneralTable;
