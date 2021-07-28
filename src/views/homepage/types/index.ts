export interface IFeature {
  title: string;
  description: string;
  image: string;
}

export interface IFeaturesContent {
  label: string;
  title: string;
  features: IFeature[];
  button: string;
}

export interface IStyle {
  primaryColor: string;
  backgroundColor: string;
  activeColor: string;
}