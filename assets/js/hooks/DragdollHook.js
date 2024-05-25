import {
  PointerSensor,
  KeyboardSensor,
  Draggable,
  createPointerSensorStartPredicate,
} from 'dragdoll';

const DragdollHook = {
  mounted() {
    this.pointerSensor = new PointerSensor(this.el);
    this.keyboardSensor = new KeyboardSensor(this.el);
    this.draggable = new Draggable([this.pointerSensor, this.keyboardSensor], {
      getElements: () => [this.el],
      startPredicate: createPointerSensorStartPredicate(),
    });
  },
  destroyed() {
    this.draggable.destroy();
    this.pointerSensor.destroy();
    this.keyboardSensor.destroy();
  }
};

export { DragdollHook };
