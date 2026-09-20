import React from 'react';
import { EcosystemIcon } from './EcosystemIcon';
import { ToolId, IconVariant } from '../../types';

interface AppIconProps {
  toolId: ToolId;
  size?: number;
  variant?: IconVariant;
  className?: string;
  showWireframe?: boolean;
}

export const AppIcon: React.FC<AppIconProps> = ({
  toolId,
  size = 64,
  variant = 'app',
  className = '',
  showWireframe = false
}) => {
  return (
    <EcosystemIcon
      id={toolId}
      size={size}
      variant={variant}
      className={className}
      showWireframe={showWireframe}
    />
  );
};
