import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import VerticalLinearStepper from '../stepper/Stepper';
import { Grid } from '@mui/material';
import PopoverCustom from './components/PopoverCustom';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
interface ISkills {
    confidenceLevelPercentage: String;
    id: String;
    keyAreas: String;
    label: String;
    rating: String;
    type: String;
    yearsOfExperiance: String;
    colorOfIndicator: String;
}

interface ITabProps {
    skills: ISkills[];
}
function PersonalTabs(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{ textAlign: "left",height:"100%" }}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PortfolioTabs(props: ITabProps) {
    const [value, setValue] = React.useState(0);
    console.log(props, "=====>Props");
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event);
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} bgcolor={"#FFF"} height={"100%"}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ textTransform: "none" }}>
                    <Tab label="Overview" sx={{ textTransform: "none" }} {...a11yProps(0)} />
                    <Tab label="Career History & Technical Skills" sx={{ textTransform: "none" }} {...a11yProps(1)} />
                    <Tab label="Projects Showcase" sx={{ textTransform: "none" }} {...a11yProps(2)} />
                    <Tab label="Educational Background" sx={{ textTransform: "none" }} {...a11yProps(3)} />
                </Tabs>
            </Box>
            <PersonalTabs value={value} index={0}>
                <Grid container alignItems={"flex-start"} flexWrap={"wrap"}>
                    {props.skills?.map((skill, i) => {
                        return <PopoverCustom i={i} skill={skill}/>
                    })}
                </Grid>
            </PersonalTabs>
            <PersonalTabs value={value} index={1}>
                <VerticalLinearStepper />
            </PersonalTabs>
            <PersonalTabs value={value} index={2}>
                Projects Showcase
            </PersonalTabs>
            <PersonalTabs value={value} index={3}>
                Educational Background
            </PersonalTabs>
        </Box>
    );
}