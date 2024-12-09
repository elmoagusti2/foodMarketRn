
import GradientShimmer from 'react-native-gradient-shimmer';
import LinearGradient from 'react-native-linear-gradient';

const Shimmers = ({ backgroundColor = "white", highlightColor = "#f9f9f9", borderRadius = 8, height = 200, width = 200 }) => {
    return (
        <GradientShimmer
            LinearGradientComponent={LinearGradient}
            backgroundColor={backgroundColor}
            highlightColor={highlightColor}
            height={height}
            width={width}
            style={{
                flex: 1,
                margin: 12,
                borderRadius: borderRadius,
            }}
        />
    )
}

export default Shimmers