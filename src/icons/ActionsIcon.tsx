import React from 'react';
import { IconInterface } from './Icon.interface';

const ActionsIcon: React.FC<IconInterface> = ({size = 24}) => {
	return (
		<span className='i-icon'>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox={'0 0 24 24'} width={size} height={size} fill="none">
				<path fill="currentColor" d="M19.4 6.455c1.16 1.546 1.848 3.466 1.848 5.545 0 2.079-.688 3.999-1.848 5.545-.248.331-.181.801.15 1.05.331.248.801.181 1.05-.15 1.348-1.796 2.148-4.028 2.148-6.445 0-2.417-.8-4.649-2.148-6.445-.249-.331-.719-.398-1.05-.15-.331.249-.398.719-.15 1.05zM6.455 4.6c1.546-1.16 3.466-1.848 5.545-1.848 2.079 0 3.999.688 5.545 1.848.331.248.801.181 1.05-.15.248-.331.181-.801-.15-1.05-1.796-1.348-4.028-2.148-6.445-2.148-2.417 0-4.649.8-6.445 2.148-.331.249-.398.719-.15 1.05.249.331.719.398 1.05.15zM4.6 17.545c-1.16-1.546-1.848-3.466-1.848-5.545 0-2.079.688-3.999 1.848-5.545.248-.331.181-.801-.15-1.05-.331-.248-.801-.181-1.05.15-1.348 1.796-2.148 4.028-2.148 6.445 0 2.417.8 4.649 2.148 6.445.249.331.719.398 1.05.15.331-.249.398-.719.15-1.05zM17.545 19.4c-1.546 1.16-3.466 1.848-5.545 1.848-2.079 0-3.999-.688-5.545-1.848-.331-.248-.801-.181-1.05.15-.248.331-.181.801.15 1.05 1.796 1.348 4.028 2.148 6.445 2.148 2.417 0 4.649-.8 6.445-2.148.331-.249.398-.719.15-1.05-.249-.331-.719-.398-1.05-.15zM10.333 7.301c-.387-.229-.866-.233-1.256-.01-.39.222-.631.637-.631 1.086l0 7.246c0 .449.241.864.631 1.086.39.223.869.219 1.256-.01l6.125-3.623c.38-.225.614-.634.614-1.076 0-.442-.234-.851-.614-1.076l-6.125-3.623zm-.387 7.884l5.384-3.185-5.384-3.185 0 6.37z" />
			</svg>
		</span>
	);
}

export default ActionsIcon;
