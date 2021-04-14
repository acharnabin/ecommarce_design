import  React,{useState}from "react";
import '../css/productdetails.css';
import PropTypes from 'prop-types';
import {Button, Divider, Paper,Tabs,Tab,Typography,Box} from '@material-ui/core'
import {Reviewcard,Desc,Table} from './Constants';
import {useStateValue} from '../store/Stateprovider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductDetails=(props)=>{


  const [value, setValue] = React.useState(0);
  const [{productdetails},dispatch]=useStateValue();
  console.log(productdetails.title);
  const addtobasket=()=>{
    dispatch({
      type:'add-to-cart',
      item:{
        title:props.match.params.title,
        price:props.match.params.price,
        
      }
    })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  

    return(
        <>
        <div className="product-details-page container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="product-images">
            
                <img src="https://images-eu.ssl-images-amazon.com/images/I/41ppKgnVLdL._AC_SX184_.jpg" className="product-images"/>
              </div>
          </div>
          <div className="col-md-6">
            <div className="products-details">
              <div className="product-title m-1">
                {props.match.params.title}
              </div>
              <Divider />
              <div className="product-price m-1">
                {props.match.params.price} rs
              </div>
              <Divider />
              <div className="product-description m-1">
              Country Of Origin - India, China
              48MP rear camera with ultra-wide, super macro, portrait, night mode, 960fps slowmotion, AI scene recognition, pro color, HDR, pro mode | 16MP facing camera
              16.9418 centimeters (6.67-inch) FHD+ full screen dot display LCD multi-touch capacitive touchscreen with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass
              The all-new Interstellar Black colour combines different hues of grey and blue together to deliver a shade that mesmerizes you
              Android v10 operating system with 2.3GHz Qualcomm Snapdragon 720G with 8nm octa core processor
              Memory, Storage & SIM: 4GB RAM | 64GB internal memory expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual-standby (4G+4G)
              5020mAH lithium-polymer large battery providing talk-time of 29 hours and standby time of 492 hours | 18W fast charger in-box and Type-C connectivity
              </div>
            </div>
            <Divider />
            

            <div className="buttons">
              <Button className="p-2" color="default" variant="contained" onClick={addtobasket}>Add to Cart</Button>
              <Button className="p-2 mx-2" color="primary" variant="contained">Buy Now </Button>
            </div>

          </div>
        </div>

        

        </div>

        <div className="product-footer conatainer-fluid">
        <Paper>
            
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                  <Tab label="Description" {...a11yProps(0)} />
                  <Tab label="Information" {...a11yProps(1)} />
                  <Tab label="Review" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0} >
              <Desc/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Table/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Reviewcard/>
              <Reviewcard/>
              <Reviewcard/>
              <Reviewcard/>
            </TabPanel>
        </Paper>
            </div>
       
        
      

     

        
        </>
    )
}

export default ProductDetails;