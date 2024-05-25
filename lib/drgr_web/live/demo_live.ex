defmodule DrgrWeb.DemoLive do
  @moduledoc false
  use DrgrWeb, :live_view

  def mount(_params, _session, socket) do
    socket
    |> assign(:connected?, connected?(socket))
    |> then(&{:ok, &1})
  end

  @impl true
  def render(%{} = assigns) do
    ~H"""
    <div
      :if={@connected?}
      id="demo-dragdoll"
      phx-hook="DragdollHook"
      class={[
        "draggable",
        "border-4 border-cyan-500",
        "rounded-lg text-center w-32 cursor-grab"
      ]}
    >
      I should be draggable
    </div>
    """
  end
end
