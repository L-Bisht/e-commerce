import { Button, Stack, TextField, Typography } from "@mui/material"

type TProps = {
    count: number,
    setCount: Function,
}

const ItemCounter = ({count = 0, setCount}: TProps) => {
  return (
    <Stack height='70%' direction='row' alignItems='center'>
        <Button variant='text' onClick={() => setCount(count - 1)} color='error'>-</Button>
        <Typography variant='subtitle1'>{count}</Typography>
        <Button variant='text' onClick={() => setCount(count + 1)} color='success'>+</Button>
    </Stack>
  )
}

export default ItemCounter