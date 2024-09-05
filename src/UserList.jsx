export default function UserList(props) {
  const { dataProduct } = props;

  // const findProducts = dataProduct.filter((el) =>
  //     el.title.toLowerCase().includes(searchProduct.toLowerCase()) ||
  //     el.category.toLowerCase().includes(searchProduct.toLowerCase()) ||
  //     el.price.toString().includes(searchProduct)
  //   );

  return (
    <div>
      <ul>
        {/* {findProducts
                    .map((el) => (
                        <li key={el.id}>
                            {el.title} | {el.category} | ${el.price}
                        </li>
                ))} */}
        {dataProduct.map((el) => (
          <li key={el.id}>
            {el.title} | {el.category} | ${el.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
