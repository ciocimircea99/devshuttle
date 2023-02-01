import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { DSFaq } from '../model/DSFaq';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DSFaqsAccordionProps {
    faqs: DSFaq[]
}

export default function DSFaqsAccordion({ faqs, ...props }: DSFaqsAccordionProps) {

    const theme = useTheme()

    return (
        <div>
            {faqs.map((faq: DSFaq, index: number) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='h6' sx={{ color: 'primary.main' }}>{faq.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack>
                            {faq.description.map((faqElement: string, index: number) => (
                                <Typography>
                                    {faqElement}
                                </Typography>
                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}