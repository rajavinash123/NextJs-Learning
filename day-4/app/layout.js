import SessionWrapper from "./components/SessionWraper";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}