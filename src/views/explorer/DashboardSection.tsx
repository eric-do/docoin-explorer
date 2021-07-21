import React from 'react'

interface Props {
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
  }
  children?: React.ReactNode;
};

const DashboardSection: React.FC<Props> = ({
  title,
  description,
  button,
  children
}: Props) => {
  const callToAction = <button className="button is-primary level-item is-outlined">
                        <strong>{button?.text}</strong>
                      </button>
  return (
    <div className="column" >
      <div className="block">
        <h3 className="title has-text-left is-3">{title}</h3>
        <h4 className="subtitle has-text-left is-6">{description}</h4>
          { children }
      </div>
      <div className="level">
        <div className="level-left">
          { button && callToAction }
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;