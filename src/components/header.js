import { Menu, Group, Center } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { headerTabs } from "../header-tabs-data.js";

export default function Header() {

    const items = headerTabs.map((data) => {
        const menuItems = (data.links.length !== 0) ? data.links.map((item) => (
            <a href={item.link} key={item.link}> <Menu.Item>{item.label}</Menu.Item> </a>
        )) : [];

        if (menuItems.length !== 0) {
            return (

                <Menu trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a href={data.link} key={data.link}>
                            <Center>
                                <span>{data.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a href={data.link} key={data.link}> {data.label} </a>);


    });
    return (
        <div className='px-48 py-10 bg-navy text-white'>
            <div className='flex justify-between'>
                <div>
                    <a href='.'> [LOGO PLACEHOLDER] </a>
                </div>
                <Group spacing='lg' >
                    {items}
                </Group>

            </div>


        </div>
    );
}