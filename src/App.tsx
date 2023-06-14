import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Form } from './components/Form/Form';
import { Tabs } from './components/Tabs/Tabs';
import { Typography } from './components/Typography/Typography';
import { UserInfo } from './components/UserInfo/UserInfo';

export const App = () => {

    return (
        <div>
            <UserInfo username="Rasul Hudaykuliyew"/>
            <br />
            <br />
            <br />
            <br />
            <Typography content='Test' type='h1'/>
            <Typography content='Test' type='h2'/>
            <Typography content='Test' type='h3'/>
            <Typography content='Test' type='subline'/>
            <Typography content='Test' type='textPrimary'/>
            <Typography content='Test' type='textSecondary'/>
            <br />
            <br />
            <br />
            <br />
            <BurgerMenu/>
            <br />
            <br />
            <Tabs/>
            <br />
            <br />
            <Form/>
        </div>
    );
}
