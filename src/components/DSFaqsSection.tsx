import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Stack,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { DSFaq, homeFaqs } from '../model/DSFaq';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DSFaqsSectionProps {
}

export default function DSFaqsSection({ ...props }: DSFaqsSectionProps) {

    const theme = useTheme()
    const faqs = homeFaqs

    return (
        <Stack>
            <Typography variant='h5'
                sx={{
                    marginBottom: theme.spacing(2),
                    flexGrow: 1,
                    textAlign: "center"
                }}>Ce ar trebui sa stii?</Typography>
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
        </Stack>
    )
}