import { BrandGithub, BrandLinkedin, BrandInstagram } from 'tabler-icons-react';

export default function Footer() {
    const iconStyle = 'p-1';
    return (
        <div className='px-48 py-10 bg-navy text-white'>
            <div className='flex justify-between'>
                [LOGO PLACEHOLDER]
                <div className=" flex">
                    <div className={iconStyle}>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/sharonyang16'>
                        <BrandGithub color='white' />
                    </a>
                    </div>
                    <div className={iconStyle}>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sharonyang16/'>
                        <BrandLinkedin color='white' varient='transparent'/>
                    </a>
                    </div>
                    <div className={iconStyle}>
                    <a target='_blank' rel='noopener noreferrer' href=''>
                        <BrandInstagram color='white' varient='transparent'/>
                    </a>
                    </div>
                    
                    
                    
                </div>
            </div>


        </div>
    );
}