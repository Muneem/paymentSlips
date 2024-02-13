export interface Message {
  fromDate: string;
  toDate: string;
  file: string;
  id: string;
}

const messages: Message[] = [
  {
    id: "1",
    fromDate: '2024-01-01',
    toDate: '2024-01-31',
    file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id:"2",
    fromDate: '2024-01-02',
    toDate: '2024-01-31',
    file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];

export const getMessages = () => messages;

export const getMessage = (id: string) => messages.find(m => m.id === id);
