import { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  count: number;
  children: ReactNode;
}

const ContentSection = ({ id, title, subtitle, icon, count, children }: ContentSectionProps) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h2 className="section-title">{title}</h2>
              <p className="section-subtitle !mb-0">{subtitle}</p>
            </div>
          </div>
          <div className="hidden sm:block glass px-4 py-2 rounded-full">
            <span className="text-sm text-muted-foreground">{count} options</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
