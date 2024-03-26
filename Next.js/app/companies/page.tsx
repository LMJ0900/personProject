'use client'

import { Main } from "next/document";

interface Icompanies{
    company: string,
    contact: string,
    country: string
}
const Compani = (props: Icompanies) => {
    return(
        <tr>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>
    );
};




export default function Companies(){
   const names =[{Company : 'Alfreds Futterkiste', Contact : 'Maria Anders', Country : 'Germany'}
   ,{Company : 'Centro comercial Moctezuma', Contact : 'Francisco Chang', Country : 'Mexico'}
   ,{Company : 'Ernst Handel', Contact : 'Roland Mendel', Country : 'Austria'}
   ,{Company : 'Island Trading', Contact : 'Helen Bennett', Country : 'UK'}
   ,{Company : 'Laughing Bacchus Winecellars', Contact : 'Yoshi Tannamuri', Country : 'Canada'}
   ,{Company : 'Magazzini Alimentari Riuniti', Contact : 'Giovanni Rovelli', Country : 'Italy'}
   ]
   const nameList = names.map((v,i) => (<Compani key={i} {...v}/>))
   
    return(
    <>
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