import { Center, Box, Input, Button, Stack, } from "chakra-ui";

import { useState } from "react"

export default function Index() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit: React.FormEventHandler<HTMLButtonElement> = (_) => {
    console.log(email)
    setEmail("")
  }

  return (
    <Center>
      <Box>
        <Stack spacing={4} >
          <Input type='email' variant="flushed" value={email} onChange={onChangeEmail} placeholder="Email" />
          <Input type='password' variant="flushed" value={password} onChange={onChangePassword} placeholder="Password"/>
          <Button colorScheme="teal" variant="solid" onClick={onSubmit} >
            送信 
          </Button>
        </Stack>
      </Box>
    </Center>
  ) 
}

