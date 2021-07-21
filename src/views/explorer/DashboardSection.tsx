import React from 'react'

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const DashboardSection: React.FC<Props> = ({
  title,
  description,
  children
}: Props) => {
  return (
    <div className="column" >
      <div className="block">
        <h3 className="title has-text-left is-3">{title}</h3>
        <h4 className="subtitle has-text-left is-6">{description}</h4>
          { children }
      </div>
    </div>
  );
}

export default DashboardSection;