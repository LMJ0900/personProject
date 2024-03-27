'use client'

import { Main } from "next/document";

interface ICompany{
    id : number,
    company: string,
    contact: string,
    country: string
}
const Company = (props: ICompany) => {
    return(
        <tr key = {props.id} > 
            <td>{props.id}</td>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>
    );
};




export default function Companies(){
   const names = [
    {id :3, company : 'Alfreds Futterkiste', contact : 'Maria Anders', country : 'Germany'},
   {id : 5,company : 'Centro comercial Moctezuma', contact : 'Francisco Chang', country : 'Mexico'},
   {id : 6,company : 'Ernst Handel', contact : 'Roland Mendel', country : 'Austria'},
   {id : 7,company : 'Island Trading', contact : 'Helen Bennett', country : 'UK'},
   {id : 8,company : 'Laughing Bacchus Winecellars', contact : 'Yoshi Tannamuri', country : 'Canada'},
   {id : 9,company : 'Magazzini Alimentari Riuniti', contact : 'Giovanni Rovelli', country : 'Italy'},
   ]
   
   const nameList = names.map((v) => (<Company  {...v} />))
   
    return(<>
    <h2>HTML Table</h2>

<table>
    <thead>
    <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>   
    </thead>
  <tbody>
    {nameList}
  </tbody>
  </table>
 </>
 )
}