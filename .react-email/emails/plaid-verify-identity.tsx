import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';
import {Link} from "@react-email/link";

export default function Email() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

  return (
      <Html>
        <Head />
        <Preview>
          Stay warm and protected on the slopes with our fluffy fun animal snowboard and ski protectors!
        </Preview>
        <Section style={main}>
          <Container style={container}>
            <Img
                src={`${baseUrl}/static/icon-512x512.png`}
                width="90"
                height="50"
                alt="Ouch and Wow"
                style={logo}
            />
            <Text style={paragraph}>Hi Rokas,</Text>
            <Text style={paragraph}>
              Welcome to our winter store! We're so excited to have you as a customer. At our store, you'll find a
              wide variety of fluffy fun animal protectors for snowboarding and skiing.
            </Text>
            <Text style={paragraph}>
              Our protectors are designed to keep you warm and protected on the slopes, so you can enjoy your winter sports without fear of falling.
              Whether you're a seasoned pro or just starting out, we've got you covered.
            </Text>
            <Text style={paragraph}>
              Thank you for choosing our store
              and we look forward to serving you. Happy shopping!
            </Text>
            <Section style={btnContainer}>
              <Button pX={12} pY={12} style={button} href="https://ouchandwow.com">
                Get started
              </Button>
            </Section>
            <Text style={paragraph}>
              Best,
              <br />
              The Ouch And Wow team
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              <Link
                  href="https://notion.so"
                  target="_blank"
                  style={{ ...link, color: '#898989' }}
              >
                Notion.so
              </Link>
              , the all-in-one-workspace
              <br />
              for your notes, tasks, wikis, and databases.
            </Text>
          </Container>
        </Section>
      </Html>
  );
}

const fontFamily =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontFamily,
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  fontFamily,
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  fontFamily,
  color: '#8898aa',
  fontSize: '12px',
};

