// import ProppTypes from "prop-types"
import { PageSection, SectionTitle } from "./Section.styled"

export const Section = ({title, children }) => {
    return (
        <PageSection>
            {title && <SectionTitle>{title}</SectionTitle>}
            {children}
        </PageSection>
    );
}