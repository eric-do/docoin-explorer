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
    <div className="section">
      <div className="block">
        <h4 className="title is-4">{title}</h4>
        <h5 className="title is-5">{description}</h5>
          { children }
      </div>
    </div>
  );
}

export default DashboardSection;