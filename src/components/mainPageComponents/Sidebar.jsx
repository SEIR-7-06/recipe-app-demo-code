function Sidebar(props) {
  console.log('These are the sidebar props:', props)
  // 💪 Exercise - map() the props.categoryNames
  // to make an array of <li> tags
  // Then insert that into the JSX
  let sidebarCardsJsx = props.categoryNames.map((name, idx) => {
    return <li key={idx} className="sidebar-card">{ name }</li>
  })

  return (
    <aside className="sidebar">
      <ul>
        { sidebarCardsJsx }
      </ul>
    </aside>
  );
}

export default Sidebar;
