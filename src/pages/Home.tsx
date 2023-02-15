import { useState } from 'react';
import {
  Page,
  Block,
  BlockTitle,
  BlockHeader,
  List,
  ListItem,
  Radio,
  Toggle,
} from 'konsta/react';
import TopNavbar from '@src/components/TopNavbar';

export default function Home() {
  const [size, setSize] = useState('Default');
  const [isTransparent, setIsTransparent] = useState(false);
  return (
    <Page>
      <TopNavbar />
      <div className="relative">
        <Block strong inset className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tempore ratione unde accusantium distinctio nulla quia numquam earum
            odio, optio, nisi rem deserunt. Molestiae delectus, ut assumenda
            numquam magni enim.
          </p>
          <p>
            Architecto molestias cum dolor dolorem provident consequuntur
            incidunt sunt fugiat tenetur odio, recusandae placeat rem veniam.
            Voluptates, repellendus odit, magni nesciunt, optio laborum
            asperiores repudiandae consectetur suscipit ab cupiditate eum.
          </p>
        </Block>
      </div>
    </Page>
  );
}
