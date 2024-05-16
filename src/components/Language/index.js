import { Dropdown } from "antd";

const dropdownRender = (menu) => (
  <div style={{ marginTop: '20px' }}>{menu}</div>
);

function Language() {
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
          <div>English</div>
        </button>
      </Dropdown>
    </>
  )
}

export default Language;