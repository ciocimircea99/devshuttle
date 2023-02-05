import { styled } from "@mui/material";

export const ActiveEventImage = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'scale-down',
});

export const EventsListImage = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'fill',
})

export const Description = styled('p')({
    maxHeight: '120px',
    overflow: 'hidden',
    fontSize: '12px',
    boxSizing: 'border-box',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 4,
})
