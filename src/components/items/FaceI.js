import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BG from './LoginForm/BG'
import CheckNum from './LoginForm/CheckNum'
import InputTime from './LoginForm/InputTime'
import InputSeardMap from './LoginForm/InputSeardMap';
import HeadTop from './LoginForm/HeadTop'
import CheckFrom from './LoginForm/CheckFrom'
import ShareBTN from './LoginForm/ShareBTN'
import HeadText from './LoginForm/HeadText';
import IconBack from './LoginForm/IconBack';
// import color from '@material-ui/core/colors/deepOrange';

const bts = theme => ({

    marginI: { marginBottom: '100%' },
    floatI: {
        float: 'left',
        marginRight: '50%',
        marginTop: '%'
    },
    PositionII: {
        marginRight: '50'

    },
})

class FaceI extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>

                <BG>
                    <IconBack></IconBack>
                    <HeadTop>
                        <InputSeardMap placeholder="ค้นหา"></InputSeardMap>
                        <InputSeardMap placeholder="ปลายทาง"></InputSeardMap>
                    </HeadTop>
                    <HeadText text="เวลาที่คาดว่าจะเดินทาง"></HeadText>
                    <InputTime type="number" placeholder="15.00 น" text="เริ่มต้น"></InputTime>
                    {/* <br></br>
                    <br></br>
                    <br></br> */}
                    <InputTime type="number" placeholder="17.00 น" text="สิ้นสุด"></InputTime>
                    {/* <button  ></button> */}
                    <CheckFrom>
                        <CheckNum type="radio" name="sex" value="1" text="คน" textII="ต้องการเพื่อนร่วมแชร์อีก" />
                        <CheckNum type="radio" name="sex" value="2" text="คน" />

                    </CheckFrom>
                    <ShareBTN text="ร่วมแชร์"></ShareBTN>
                </BG>


            </React.Fragment>
        )
    }
}
export default withStyles(bts)(FaceI)