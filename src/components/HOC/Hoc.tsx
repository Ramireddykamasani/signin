import { useNavigate, useParams } from "react-router-dom";

const withRouter = (WrappedComponent: React.ComponentState) => {
    const ComponentWithRouter = (props: Object) => {
        let navigate = useNavigate();
    
        let params = useParams();
        return <WrappedComponent {...props} navigate={navigate} params={params}/>;
    };
    return ComponentWithRouter;
};

export default withRouter;