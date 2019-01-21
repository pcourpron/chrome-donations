import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'charityWater', label: 'Charity: Water' },
    { value: `Doctors without borders`, label: `Doctors without borders` },
    { value: 'OIC', label: 'Orthopeadic Institute for Children' },
    { value: 'Red Cross', label: 'Red Cross' },
    { value: 'Saint Joseph Center', label: 'Saint Joseph Center' },
    { value: 'St. Jude ', label: "St. Jude Children's Research Hospital" },
    { value: `SMRC`, label: `Santa Monica Rugby Club` },
    { value: 'Teen Challenge', label: 'Teen Challenge' },
    { value: `UCLA Men's rugby`, label: `UCLA Men's rugby` },
    { value: `UCLA Spirit Squad`, label: `UCLA Spirit Squad` },
    { value: 'Wounded Warrior Project', label: 'Wounded Warrior Project' }

    
];

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid black',
      color: state.isSelected ? 'blue' : 'blue',
      padding: 20,
      width: 300
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

class Info extends React.Component {

    state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <div className='row justify-content-center' style={{ padding: '20px 0' }}>
                    <h5>Your information</h5>
                </div>
                <div className='row info_row'>
                    Name: {this.props.fullName}
                </div>
                <div className='row info_row'>
                    <p> Number of tabs opened since joining: {this.props.tabs} </p>
                </div>
                <div className='row info_row'>
                    <p> Non-profit currently supporting : {this.props.nonProfit}</p>
                </div>
                <div className='row info_row'>
                <p style={{paddingTop:'5px',marginRight:'20px'}}>Change non-profit :</p>
                    <Select
                     styles={customStyles}
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        isClearable={true}
                    />
                </div>
                <div className='row info_row'>
                <button className='btn btn-outline-primary' onClick={() => { this.props.changeNonProfit(this.state.selectedOption.label)}} > Submit Changes</button>
                </div>



            </div>)
    }
}

export default Info 