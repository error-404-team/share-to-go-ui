import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CheckNum from './Search&Shared/CheckNum'
import InputTime from './Search&Shared/InputTime'
import EditTextSearh from './Search&Shared/EditTextSearh';
import TapSearch from './Search&Shared/TapSearch'
import SelectCheck from './Search&Shared/SelectCheck'
import ShareBTN from './Search&Shared/ShareBTN'
import HeadText from './Search&Shared/HeadText';
import IconBack from './Search&Shared/IconBack';
import BgConst from './Search&Shared/BgConst';
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
class TapShare extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
    }
    render() {
        return (
            <React.Fragment>
                <BgConst>
                    <IconBack></IconBack>
                    <TapSearch>
                        <EditTextSearh placeholder="ค้นหา"></EditTextSearh>
                        <EditTextSearh placeholder="ปลายทาง"></EditTextSearh>
                    </TapSearch>
                    <HeadText text="เวลาที่คาดว่าจะเดินทาง"></HeadText>
                    <InputTime type="time " placeholder="15.00 น" text="เริ่มต้น"></InputTime>
                    <InputTime type="time " placeholder="17.00 น" text="สิ้นสุด"></InputTime>
                    <SelectCheck>
                        <CheckNum type="radio" name="sex" value="1" text="คน" textII="ต้องการเพื่อนร่วมแชร์อีก" />
                        <CheckNum type="radio" name="sex" value="2" text="คน" />
                    </SelectCheck>
                    <ShareBTN text="ร่วมแชร์"></ShareBTN>
                </BgConst>
            </React.Fragment>
        )
    }
}
export default withStyles(bts)(TapShare)