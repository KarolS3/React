import {useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
const Content = () => {
  const [items, setItems] = useState([
{
  id:1,
  checked: true,
  item: "cosik cosik"
},
{
  id:2,
  checked: false,
  item: "item2"
},
{
  id:3,
  checked: false,
  item: "item3"
}
  ]);
 
  return (
   <main>
<ul>
  {items.map((item) => (
    <li className="item" key={item.id}>
      <input
      type="checkbox"
      checked={item.checked}
      />
<label>{item.item}</label>
<FaTrashAlt role='button' tabIndex={0}>

</FaTrashAlt>
    </li>
  )
  )}
</ul>
   </main>
  );
}

export default Content;
