import PropTypes from 'prop-types';
import { PageSection, SectionTitle } from "./Section.styled"

export const Section = ({title, children }) => {
    return (
        <PageSection>
            {title && <SectionTitle>{title}</SectionTitle>}
            {children}
        </PageSection>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
}