'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/switch';
import { SunIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/outline';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-end mb-3">
      <Switch
        defaultSelected
        size="lg"
        color="primary"
        startContent={<MoonIcon />}
        endContent={<SunIcon />}
        onValueChange={(isSelected) => setTheme(isSelected ? 'dark' : 'light')}
      />
    </div>
  );
};
