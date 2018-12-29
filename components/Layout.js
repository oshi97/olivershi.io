import Header from './Header.js'
// TODO override nextjs built in <Document> to include layout so it doesn't ever have to update
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header/>
    {props.children}
  </div>
)

export default Layout
