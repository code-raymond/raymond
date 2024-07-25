import { Box, Grid, Popover, Typography } from "@mui/material"
import { useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import StarIcon from '@mui/icons-material/Star';
interface PopoverCustomProps {
    skill: any;
    i: number;
}
const PopoverCustom = (props: PopoverCustomProps) => {
    const { skill, i } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const styles = { container: { padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0px 0px 10px 1px rgba(50,50,50,0.25)", background: "#FFF", borderRadius: "5px", margin: "0.4rem", height: "256px" } }
    const open = Boolean(anchorEl);
    return <Grid key={`Skill_${i}`} aria-owns={open ? `mouse-over-popover-${i}` : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose} item xs={12} sm={12} md={5.5} lg={2.8} sx={styles.container}>
        <Typography variant='h6' sx={{ textAlign: "left", width: "100%" }}>{skill.label}</Typography>
        <Typography variant="caption"
            component="div"
            color="text.secondary" sx={{ textAlign: "left", width: "100%" }}>Skill type: {skill.type.toUpperCase()}</Typography>
        <Box height={"128px"}>
            <CircularProgressWithLabel colorOfPrograss={String(skill.colorOfIndicator)} label="Usage" value={Number(skill.confidenceLevelPercentage)} />
        </Box>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}><Typography sx={{ color: "#BDBDBD", fontSize: "12px" }}>Howmuch I rate myself out of 5</Typography><Box display={"flex"}>{Array.from(Array(5).keys()).map((i) => {
            console.log("Value of i", i)
            return <StarIcon sx={{ color: i < Number(skill.rating) ? "#FFA500" : "#7D7D7D" }} />
        })}</Box></div>

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