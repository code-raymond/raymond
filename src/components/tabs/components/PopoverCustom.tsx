import { Grid, Popover, Typography } from "@mui/material"
import { useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import StarIcon  from '@mui/icons-material/Star';
interface PopoverCustomProps {
    skill: any;
    i: number;
}
const  PopoverCustom = (props:PopoverCustomProps)=>{
    const {skill,i}=props;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return   <Grid key={`Skill_${i}`} aria-owns={open ? `mouse-over-popover-${i}` : undefined}
    aria-haspopup="true"
    onMouseEnter={handlePopoverOpen}
    onMouseLeave={handlePopoverClose} item xs={3} sx={{ padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", borderInline: "1px solid #DFDFDF",background:"#FFF" }}>
    <Typography variant='h6'>{skill.label}</Typography>
    <Typography variant="caption"
        component="div"
        color="text.secondary">Skill type: {skill.type.toUpperCase()}</Typography>
    <CircularProgressWithLabel colorOfPrograss={String(skill.colorOfIndicator)} label="Confidence" value={Number(skill.confidenceLevelPercentage)} />
    <div style={{ display: "flex" }}>{Array.from(Array(5).keys()).map((i) => {
        console.log("Value of i", i)
        return <StarIcon sx={{ color: i < Number(skill.rating) ? "#FFA500" : "#7D7D7D" }} />
    })}</div>

    <Popover
        id="mouse-over-popover"
        sx={{
            pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
    >
        {skill.keyAreas && <ul>
            {String(skill.keyAreas).split("|").map((area, i) => {
                return area != "" && area != undefined && area != null && <li><Typography width={"100px"} variant="caption"
                    component="div"
                    color="text.secondary" key={`Area_${i}`}>{area}</Typography></li>
            })}
        </ul>}
    </Popover>
</Grid>
}

export default PopoverCustom;