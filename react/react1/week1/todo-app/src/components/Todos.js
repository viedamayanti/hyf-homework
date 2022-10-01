const todoItem = [
  {
    id: 1,
    activity: 'Get out of bed',
    dateline: 'Wed Sep 13 2017',
  },
  {
    id: 2,
    activity: 'Brush teeth',
    dateline: 'Thu Sep 14 2017',
  },
  {
    id: 3,
    activity: 'Eat breakfast',
    dateline: 'Fri Sep 15 2017',
  },
];

export function Todos() {
  return (
    <ul>
      {todoItem.map((item) => (
        <li key={item.id}>
          {' '}
          {item.activity} ,{item.dateline}
        </li>
      ))}
    </ul>
  );
}
