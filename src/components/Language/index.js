import { Dropdown, Grid } from "antd";
import all_imgs from "../../assets/img/all_img";

const { useBreakpoint } = Grid;

const dropdownRender = (menu) => (
  <div style={{ marginTop: '20px' }}>{menu}</div>
);

function Language() {
  const screen = useBreakpoint();
  const items = [
    {
      label: (
        <div>English</div>
      ),
      key: '0'
    },
    {
      label: (
        <div>Vietnamese</div>
      ),
      key: '1'
    }
  ]
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']} dropdownRender={dropdownRender}>
        <button onClick={(e) => e.preventDefault()}>
          {!screen.sm ? <img src={all_imgs.england} alt="england" style={{paddingTop: "28px"}}/> : <div>English</div>}
        </button>
      </Dropdown>
    </>
  )
}

export default Language;