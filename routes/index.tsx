import { Head, Link } from "aleph/react";
import { Center, Box, Input, Button } from "chakra-ui";

import { useState } from "react"

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function Index() {
  const [email, setEmail] = useState<string>("");

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  }

  const onSubmit: React.FormEventHandler<HTMLButtonElement> = (_) => {
    console.log(email)
    setEmail("")
  }

  return (
    <Center>
      <Box>
          <Input variant="outline" value={email} onChange={onChangeEmail} />
          <Button colorScheme="teal" variant="solid" onClick={onSubmit} >
            送信 
          </Button>
      </Box>
    </Center>
  ) 
}

function _Index() {
  return (
    <div className="screen index">
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      <p className="logo">
        <img src="./assets/logo.svg" width="75" height="75" title="Aleph.js" />
      </p>
      <h1>
        The Fullstack Framework in Deno.
      </h1>
      <p>
        <strong>Aleph.js</strong> gives you the best developer experience for building web applications<br />{" "}
        with modern toolings.
      </p>
      <div className="external-links">
        {externalLinks.map(([text, href]) => (
          <a
            href={href}
            target="_blank"
            key={href}
          >
            {text}
          </a>
        ))}
      </div>
      <nav>
        <Link
          role="button"
          to="/todos"
        >
          Todos App Demo
        </Link>
      </nav>
    </div>
  );
}
