import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color?: string;
}

const ModuleCard = ({ title, description, icon: Icon, path, color = 'text-primary' }: ModuleCardProps) => {
  return (
    <Link to={path}>
      <Card className="h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <Icon className={cn('w-8 h-8 flex-shrink-0 ml-4', color)} />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ModuleCard;
