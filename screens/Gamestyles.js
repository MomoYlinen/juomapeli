import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FCFCFC" },
  header: { flex: 1 },
  headerTop: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  headerBottom: {
    marginBottom: 24,
    flex: 2,
    justifyContent: "flex-end",
  },
  headerBottomTextContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerBottomText: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6534B9",
    fontFamily: "Nunito_900Black",
  },
  nameSlotContainer: { flex: 1, justifyContent: "flex-end" },
  nameSlot: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    backgroundColor: "#6534B9",
    width: "75%",
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 2,
  },
  slotGameName: { flex: 1, marginTop: 12 },
  slotGameAction: { flex: 1 },
  slotGameSpin: { flex: 1, width: "30%", marginBottom: 8 },
  baseGameContainer: { flex: 1, backgroundColor: "#FCFCFC" },
});
