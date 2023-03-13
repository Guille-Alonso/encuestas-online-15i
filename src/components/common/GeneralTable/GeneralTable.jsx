import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Table } from "react-bootstrap";
import './GeneralTable.css'

const GeneralTable = ({headings, items, setSelected, selected}) => {


  return ( 
    <MDBTable responsive>
      <MDBTableHead>
   
      <tr>
        { 
        headings.map((heading)=><th key={nanoid()}>{heading}</th>)
        }        
      </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        
        items.length!==0 && items.map((item)=>
       
        <tr key={nanoid()} onClick={()=>setSelected(item._id)} className={selected===item._id? 'row-selected' : ''}>
          {
          
          Object.values(item).map((value)=>{
         
            if (!Array.isArray(value)) {
                if(value ===  true){
                  return  <td key={nanoid()}>Activa</td>
                }else if(value ===false){
                  return  <td key={nanoid()}>Inactiva</td>
                }else  return  <td key={nanoid()}>{value?.name ?? value}</td>
             
            }  
           

          
        })

          }
        </tr>
          )
      }
      
      </MDBTableBody>
    </MDBTable>
   );
}
 
export default GeneralTable;
