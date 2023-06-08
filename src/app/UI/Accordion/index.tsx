import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import React from 'react'

interface IAccordionBlock<S = string, CSS = React.CSSProperties> {
    children?: React.ReactNode | React.ReactNode[]
    AccordionStyle?: CSS
    DetailsStyle?: CSS
    SummaryStyle?: CSS
    AccordionClassName?: S
    DetailsClassName?: S
    Summary?: S
}

export const AccordionBlock: React.FC<IAccordionBlock> = ({
    children,
    DetailsClassName,
    AccordionClassName,
    Summary,
    DetailsStyle,
    AccordionStyle,
}) => {
    return (
        <Accordion
            className={AccordionClassName}
            style={AccordionStyle}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                {Summary}
            </AccordionSummary>
            <AccordionDetails
                style={DetailsStyle}
                className={DetailsClassName}
            >
                {children}
            </AccordionDetails>
        </Accordion>
    )
}
